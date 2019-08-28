#!/bin/bash

# Written by Rizwan Hasan <rizwan.hasan486@gmail.com>
# Written for MagpieOS only
# Do not edit it on any situation
# www.MagpieOS.NET

# Declaring variables
Installer=$(pacman -Q | grep -wo calamares)
Calamares="calamares";

# Conditions
if [ "$Installer" == "$Calamares" ]; then	
	#'/usr/bin/canberra-gtk-play' --volume 5 --file='/opt/magpieos-startup/magpieos-startup.ogg'
	'/usr/bin/canberra-gtk-play' --volume 5 --file='/opt/magpieos-startup/magpieos-startup.ogg'
	pkexec /usr/bin/calamares
else
	'/usr/bin/canberra-gtk-play' --volume 5 --file='/opt/magpieos-startup/magpieos-startup.ogg'
fi

# End
