#Raspberry pi setup
1. Install python3
2. Install pyserial
3. Install python3-flask
4. edit crontab to automatically start the server
   ```
   @reboot cd /home/pi/scoutlabs && python3 /home/pi/scoutlabs/app.py &
   ```
#
