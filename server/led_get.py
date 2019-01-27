import RPi.GPIO as GPIO
import sys
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

pin = int(sys.argv[1])
GPIO.setup(pin, GPIO.OUT)
GPIO.input(pin)