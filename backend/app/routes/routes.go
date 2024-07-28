package routes

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"github.com/rayprastya/crewsakan-be/app/controllers"
	openai "github.com/sashabaranov/go-openai"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatalln("Error loading .env file:", err)
	}
}

func SetupRoutes(app *fiber.App) {
	log.Printf("open api key %v", os.Getenv("OPENAI_API_KEY"))

	client := openai.NewClient(os.Getenv("OPENAI_API_KEY"))
	app.Post("/get-list-menu", controllers.GenerativeAI(client, "GetListMenu"))
	app.Post("/get-recipe", controllers.GenerativeAI(client, "GetRecipe"))
	app.Post("/get-step", controllers.GenerativeAI(client, "GetStep"))
	app.Post("/recommend-nearby", controllers.GenerativeAI(client, "RecommendNearby"))

	app.Post("/menus", controllers.PostMenu)
	app.Get("/menus/:merchant_id", controllers.GetMenusByMerchantID)
	app.Post("/merchants", controllers.CreateMerchant)
	app.Get("/merchants/:id", controllers.GetMerchantByID)
	app.Post("/login", controllers.LoginMerchant)
	app.Post("/orders", controllers.PostOrder)
	app.Post("/wishlists", controllers.PostWishlist)
	app.Get("/wishlists/:merchant_id", controllers.GetWishlistByMerchantID)
	app.Delete("/wishlists/:id", controllers.DeleteWishlistByID)
	app.Delete("/menus/:id", controllers.DeleteMenuByID)
}
