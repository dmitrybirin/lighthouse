import RPi.GPIO as GPIO
import sys
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

pin = int(sys.argv[1])
