#!/bin/sh

echo "====== Arino V0.1 By IOXhop.com ======";
mkdir /usr/arino
wget http://file.host-1gb.com/arino/otaservice -O /usr/arino/otaservice
chmod 755 /usr/arino/otaservice
echo "" > /usr/arino/hexfile.hex
chmod 777 /usr/arino/hexfile.hex
wget http://file.host-1gb.com/arino/arino -O /etc/init.d/arino
chmod 755 /etc/init.d/arino
ln -s /etc/init.d/arino /etc/rc.d/S99arino
/etc/init.d/arino start
echo "Complete installation"