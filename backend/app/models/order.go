package models

import "time"

type Order struct {
	ID            int       `json:"id" gorm:"primaryKey AUTO_INCREMENT"`
	UserID        string    `json:"user_id"`
	MenuID        int       `json:"menu_id" gorm:"index"`          // Foreign key to Menu
	Menu          Menu      `json:"menu" gorm:"foreignKey:MenuID"` // Relationship to Menu
	Optional      string    `json:"optional"`
	Lat           float64   `json:"lat"`
	Lng           float64   `json:"lng"`
	OrderDatetime time.Time `json:"order_datetime" gorm:"default:CURRENT_TIMESTAMP"`
}
