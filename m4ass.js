var names=new Array();
names[0]="Nithin";
names[1]="Karthik";
names[2]="Rahul";
names[3]="Rajeshwar";
names[4]="Riswanth";
names[5]="Hemanth";
names[6]="Manoj";
names[7]="Sai";
names[8]="Suryam";
names[9]="Abhijet";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}