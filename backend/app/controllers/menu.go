package controllers

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/rayprastya/crewsakan-be/app/db"
	"github.com/rayprastya/crewsakan-be/app/models"
)

func PostMenu(c *fiber.Ctx) error {
	var menu models.Menu
	if err := c.BodyParser(&menu); err != nil {
		return err
	}
	result := db.GetDB().Create(&menu)
	if result.Error != nil {
		log.Printf("Error creating menu: %v", result.Error)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Error creating menu",
		})
	}
	return c.JSON(menu)
}

func GetMenusByMerchantID(c *fiber.Ctx) error {
	merchantID := c.Params("merchant_id")
	var menus []models.Menu
	result := db.GetDB().Where("merchant_id = ?", merchantID).Find(&menus)
	if result.Error != nil {
		log.Printf("Error fetching menus: %v", result.Error)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Error fetching menus",
		})
	}
	return c.JSON(menus)
}

func DeleteMenuByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var menu models.Menu
	result := db.GetDB().Where("id = ?", id).Delete(&menu)
	if result.Error != nil {
		log.Printf("Error deleting menu: %v", result.Error)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Error deleting menu",
		})
	}
	return c.JSON(menu)
}
