package controllers

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/rayprastya/crewsakan-be/app/db"
	"github.com/rayprastya/crewsakan-be/app/models"
)

func CreateMerchant(c *fiber.Ctx) error {
	var merchant models.Merchant
	if err := c.BodyParser(&merchant); err != nil {
		return err
	}
	result := db.GetDB().Create(&merchant)
	if result.Error != nil {
		log.Printf("Error creating merchant: %v", result.Error)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Error creating merchant",
		})
	}
	return c.JSON(merchant)
}

func GetMerchantByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var merchant models.Merchant
	result := db.GetDB().Where("id = ?", id).First(&merchant)
	if result.Error != nil {
		log.Printf("Error fetching merchant: %v", result.Error)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Error fetching merchant",
		})
	}
	return c.JSON(merchant)
}

func LoginMerchant(c *fiber.Ctx) error {
	return c.SendString("Login Merchant")
}
