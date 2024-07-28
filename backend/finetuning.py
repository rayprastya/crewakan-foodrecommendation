import openai
import time

# Set your API key

def upload_file(file_path):
    response = openai.File.create(
        file=open(file_path, 'rb'),
        purpose='fine-tune'
    )
    return response

def create_fine_tuning_job(file_id):
    response = openai.FineTuningJob.create(
        training_file=file_id,
        model='gpt-3.5-turbo-0613'  # Specify the base model
    )
    return response

def check_fine_tuning_job_status(job_id):
    response = openai.FineTuningJob.retrieve(job_id)
    return response

def create_completion(model, prompt):
    response = openai.Completion.create(
        model=model,
        prompt=prompt,
        max_tokens=50  # Adjust as needed
    )
    return response

def main():
    # Upload the training file
    file_response = upload_file('data.jsonl')
    file_id = file_response['id']
    print(f"File uploaded: {file_id}")

    fine_tuning_job_response = create_fine_tuning_job(file_id)
    job_id = fine_tuning_job_response['id']
    print(f"Fine-tuning job created: {job_id}")

    while True:
        job_status_response = check_fine_tuning_job_status(job_id)
        status = job_status_response['status']
        print(f"Fine-tuning job status: {status}")

        if status == 'succeeded':
            fine_tuned_model = job_status_response['fine_tuned_model']
            print(f"Fine-tuning succeeded. Fine-tuned model: {fine_tuned_model}")

            completion_response = create_completion(fine_tuned_model, "recommend me a food, I'm making beef")
            print("Completion response:", completion_response.choices[0].text)
            break
        elif status == 'failed':
            print("Fine-tuning job failed.")
            break
        
        time.sleep(10)  # Poll every 10 seconds

if __name__ == '__main__':
    main()
