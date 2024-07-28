package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	"github.com/rayprastya/crewsakan-be/app/db"
	"github.com/rayprastya/crewsakan-be/app/routes"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatalln("Error loading .env file:", err)
	}
}

func main() {
	db.InitDatabase()

	defer func() {
		sqlDB, err := db.GetDB().DB()
		if err != nil {
			log.Fatalf("Error getting database connection: %v", err)
		}
		sqlDB.Close()
	}()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	app.Use(logger.New())

	routes.SetupRoutes(app)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}
	log.Fatal(app.Listen(":" + port))
}
