import RPi.GPIO as GPIO

color_map = {
	"blue":18,
	"green":15,
	"red":14
}

action_map = {
	"on": GPIO.HIGH,
	"off": GPIO.LOW
}