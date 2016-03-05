# Arino
Arduino OTA upload with linkit smart 7688 or raspberry pi

# Index
* [Hardware Setup](#hardware-setup)
* [Install on micropc](#install-on-micropc)
  * [Linkit Smart 7688](#linkit-smart-7688)
  * Raspberry Pi (Coming soon !)
* [Install on Arduino ide](#install-on-arduino-ide)

## Hardware Setup
![connect to Arduino Pro Mini 3.3V 8MHz](https://raw.githubusercontent.com/maxpromer/arino/master/circuit.png)

## Install on micropc
### Linkit Smart 7688
Login ssh to your linkit smart 7688 then enter bottom command
```sh
# wget http://www.file.host-1gb.com/arino/install.sh
# sh install.sh
```
### Raspberry Pi
Coming soon !

## Install on Arduino ide
> Support Arduino IDE 1.6.5 or later

In program arduino ide go to **File > Preferences**

![File > Preferences](http://a.lnwpic.com/ldc5ua.png)

enter __https://raw.githubusercontent.com/maxpromer/arino/master/arduino/package_arino_index.json__ to **Additional Boards Manager URLs** box and click button **OK**

![Additional Boards Manager](http://a.lnwpic.com/zi14q5.png)

Go to **Tool > Board > Boards Manager**

![Boards Manager](http://a.lnwpic.com/jenmjm.png)

Select the **AVR OTA Upload** and click **Install** button

![AVR OTA Upload](http://a.lnwpic.com/fxos11.png)

See the download progress on the bottom window and wait word **Installed** show

![Boards Installed](http://a.lnwpic.com/0jzj17.png)

Close the **Boards Manager** window, click menu **Tools > Boards** selected **Arduino Boards** then click Upload !

![Boards](http://a.lnwpic.com/cncg7o.png)

![Arduino Upload](http://a.lnwpic.com/zt479z.png)

