import os
import subprocess

BRIGHTNESS = '/usr/local/bin/brightness'


def _screen(level):
    try:
        subprocess.call([BRIGHTNESS, '{:0.1f}'.format(level)])
    except Exception as e:
        print e


def wakeup_screen(level=100):
    '''Wake up the laptop screen. optional argument level sets brightness of screen 0-100%'''
    _screen(level/100.0)
    


def sleep_screen():
    '''Turn off the screen brightness'''
    _screen(0.0)




    