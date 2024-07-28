title = [
    "No-Bake Nut Cookies",
    "Jewell Ball'S Chicken",
    "Creamy Corn",
    "Chicken Funny",
    "Reeses Cups(Candy)",
    "Cheeseburger Potato Soup"
]

step = [
    ["1 c. firmly packed brown sugar", "1/2 c. evaporated milk", "1/2 tsp. vanilla", "1/2 c. broken nuts (pecans)", "2 Tbsp. butter or margarine", "3 1/2 c. bite size shredded rice biscuits"],
    ["1 small jar chipped beef cut up", "4 boned chicken breasts", "1 can cream of mushroom soup", "1 carton sour cream"],
    ["2 (16 oz.) pkg. frozen corn", "1 (8 oz.) pkg. cream cheese cubed", "1/3 c. butter cubed", "1/2 tsp. garlic powder", "1/2 tsp. salt", "1/4 tsp. pepper"],
    ["1 large whole chicken", "2 (10 1/2 oz.) cans chicken gravy", "1 (10 1/2 oz.) can cream of mushroom soup", "1 (6 oz.) box Stove Top stuffing", "4 oz. shredded cheese"],
    ["1 c. peanut butter", "3/4 c. graham cracker crumbs", "1 c. melted butter", "1 lb. (3 1/2 c.) powdered sugar", "1 large pkg. chocolate chips"],
    ["6 baking potatoes", "1 lb. of extra lean ground beef", "2/3 c. butter or margarine", "6 c. milk", "3/4 tsp. salt", "1/2 tsp. pepper", "1 1/2 c (6 oz.) shredded Cheddar cheese divided", "12 sliced bacon cooked crumbled and divided", "4 green onion chopped and divided", "1 (8 oz.) carton sour cream (optional)"]
]

ingredients = [
    ["In a heavy 2-quart saucepan mix brown sugar nuts evaporated milk and butter or margarine.", "Stir over medium heat until mixture bubbles all over top.", "Boil and stir 5 minutes more. Take off heat.", "Stir in vanilla and cereal; mix well.", "Using 2 teaspoons drop and shape into 30 clusters on wax paper.", "Let stand until firm about 30 minutes."],
    ["Place chipped beef on bottom of baking dish.", "Place chicken on top of beef.", "Mix soup and cream together; pour over chicken. Bake uncovered at 275° for 3 hours."],
    ["In a slow cooker combine all ingredients. Cover and cook on low for 4 hours or until heated through and cheese is melted. Stir well before serving. Yields 6 servings."],
    ["Boil and debone chicken.", "Put bite size pieces in average size square casserole dish.", "Pour gravy and cream of mushroom soup over chicken; level.", "Make stuffing according to instructions on box (do not make too moist).", "Put stuffing on top of chicken and gravy; level.", "Sprinkle shredded cheese on top and bake at 350° for approximately 20 minutes or until golden and bubbly."],
    ["Combine first four ingredients and press in 13 x 9-inch ungreased pan.", "Melt chocolate chips and spread over mixture. Refrigerate for about 20 minutes and cut into pieces before chocolate gets hard.", "Keep in refrigerator."],
    ["Wash potatoes; prick several times with a fork.", "Microwave them with a wet paper towel covering the potatoes on high for 6-8 minutes.", "The potatoes should be soft ready to eat.", "Let them cool enough to handle.", "Cut in half lengthwise; scoop out pulp and reserve.", "Discard shells.", "Brown ground beef until done.", "Drain any grease from the meat.", "Set aside when done.", "Meat will be added later.", "Melt butter in a large kettle over low heat; add flour stirring until smooth.", "Cook 1 minute stirring constantly. Gradually add milk; cook over medium heat stirring constantly until thickened and bubbly.", "Stir in potato ground beef salt pepper 1 cup of cheese 2 tablespoons of green onion and 1/2 cup of bacon.", "Cook until heated (do not boil).", "Stir in sour cream if desired; cook until heated (do not boil).", "Sprinkle with remaining cheese bacon and green onions."]
]

ner = [
    ["brown sugar", "milk", "vanilla", "nuts", "butter", "bite size shredded rice biscuits"],
    ["beef", "chicken breasts", "cream of mushroom soup", "sour cream"],
    ["frozen corn", "cream cheese", "butter", "garlic powder", "salt", "pepper"],
    ["chicken", "chicken gravy", "cream of mushroom soup", "shredded cheese"],
    ["peanut butter", "graham cracker crumbs", "butter", "powdered sugar", "chocolate chips"],
    ["baking potatoes", "extra lean ground beef", "butter", "milk", "salt", "pepper", "Cheddar cheese", "bacon", "green onion", "sour cream"]
]

{"messages": [{"role": "system", "content": "You are a happy assistant that puts a positive spin on everything."}, {"role": "user", "content": "I fell off my bike today."}, {"role": "assistant", "content": "It's great that you're getting exercise outdoors!"}]}
{"messages": [{"role": "user", "content": "I lost my book today."}, {"role": "assistant", "content": "You can read everything on ebooks these days!"}]}

{"messages": [{"role": "system", "content": "You are an assistant that will recommend food for the user."}, 
            #   {"role": "user", "content": "I fell off my bike today."}, 
              {"role": "assistant", "content": "It's great that you're getting exercise outdoors!"}]}

# easy ocr

import json



with open('data.jsonl', 'w') as f:
    for i in range(len(ner)):
        for j in range(i):
            message = {
                "messages": [{"role": "system", "content": "You are an assistant that will recommend food for the user."}, 
                    {"role": "user", "content": f"I want you to recommend me a menu, i made {ner[i][j]}."}, 
                    {"role": "assistant", "content": f"i see you are making {ner[i][j]}, i will recommend you making {title[i]}"},
                    {"role": "user", "content": f"what is the recipe for {ner[i][j]} and how to make it?"},
                    {"role": "assistant", "content": "{" + f"ingredients : {ingredients[i]}  steps : {step[i]}" + "}"},
                ]
            }
            f.write(json.dumps(message) + '\n')