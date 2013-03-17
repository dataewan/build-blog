wok:	sass
	wok

wok-server:	sass
	wok --server

sass:	clean
	compass compile

clean:
	rm -rf media/css/*

scripts:
	cp dataewan.github.com/js/* media/js 

