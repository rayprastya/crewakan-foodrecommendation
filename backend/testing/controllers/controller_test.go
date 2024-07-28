package controllers_test

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/http/httptest"
	"os"
	"strings"
	"testing"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"github.com/rayprastya/crewsakan-be/app/controllers"
	openai "github.com/sashabaranov/go-openai"
	"github.com/stretchr/testify/assert"
)

func init() {
	if err := godotenv.Load("../../.env"); err != nil {
		log.Fatalln("Error loading .env file:", err)
	}
}

func setupApp() *fiber.App {
	app := fiber.New()
	client := openai.NewClient(os.Getenv("OPENAI_API_KEY"))
	app.Post("/get-list-menu", controllers.GenerativeAI(client, "GetListMenu"))
	app.Post("/get-recipe", controllers.GenerativeAI(client, "GetRecipe"))
	app.Post("/get-step", controllers.GenerativeAI(client, "GetStep"))
	app.Post("/recommend-nearby", controllers.GenerativeAI(client, "RecommendNearby"))
	return app
}

func TestGenerativeAI_GetListMenu(t *testing.T) {
	app := setupApp()

	reqBody := `{"content":"pizza"}`
	req := httptest.NewRequest(http.MethodPost, "/get-list-menu", strings.NewReader(reqBody))
	req.Header.Set("Content-Type", "application/json")

	resp, err := app.Test(req, -1)
	fmt.Println(resp)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, resp.StatusCode)

	var body struct {
		StatusCode int `json:"statusCode"`
		FoodList   struct {
			Recommendation []string `json:"recommendation"`
		} `json:"foodList"`
	}
	json.NewDecoder(resp.Body).Decode(&body)
	assert.Equal(t, http.StatusOK, body.StatusCode)
	assert.NotEmpty(t, body.FoodList.Recommendation)
}

func TestGenerativeAI_GetRecipe(t *testing.T) {
	app := setupApp()

	reqBody := `{"content":"spaghetti"}`
	req := httptest.NewRequest(http.MethodPost, "/get-recipe", strings.NewReader(reqBody))
	req.Header.Set("Content-Type", "application/json")

	resp, err := app.Test(req, -1)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, resp.StatusCode)

	var body struct {
		StatusCode int `json:"statusCode"`
		Summary    struct {
			Ingredients []string `json:"ingredients"`
			Steps       []string `json:"steps"`
		} `json:"summary"`
	}
	json.NewDecoder(resp.Body).Decode(&body)
	assert.Equal(t, http.StatusOK, body.StatusCode)
	assert.NotEmpty(t, body.Summary.Ingredients)
	assert.NotEmpty(t, body.Summary.Steps)
}

func TestGenerativeAI_GetStep(t *testing.T) {
	app := setupApp()

	reqBody := `{"content":"cake"}`
	req := httptest.NewRequest(http.MethodPost, "/get-step", strings.NewReader(reqBody))
	req.Header.Set("Content-Type", "application/json")

	resp, err := app.Test(req, -1)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, resp.StatusCode)

	var body struct {
		StatusCode int `json:"statusCode"`
		Steps      struct {
			Steps []string `json:"steps"`
		} `json:"steps"`
	}
	json.NewDecoder(resp.Body).Decode(&body)
	assert.Equal(t, http.StatusOK, body.StatusCode)
	assert.NotEmpty(t, body.Steps.Steps)
}

func TestGenerativeAI_RecommendNearby(t *testing.T) {
	app := setupApp()

	reqBody := `{"merchant_id":1}`
	req := httptest.NewRequest(http.MethodPost, "/recommend-nearby", strings.NewReader(reqBody))
	req.Header.Set("Content-Type", "application/json")

	resp, err := app.Test(req, -1)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, resp.StatusCode)

	var body struct {
		StatusCode int `json:"statusCode"`
		FoodList   struct {
			Recommendation []string `json:"recommendation"`
		} `json:"foodList"`
	}
	json.NewDecoder(resp.Body).Decode(&body)
	assert.Equal(t, http.StatusOK, body.StatusCode)
	assert.NotEmpty(t, body.FoodList.Recommendation)
}
