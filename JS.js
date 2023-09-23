window.onload = function()
{
	var tmp = new Array();
	tmp[0]=0;
	var i=0;
	var sign = new Array();
	sign[0]=1;
	var check = 5;
	var str='';
	var Input = document.getElementById("Input");
	var Output = document.getElementById("Output");
	var Pl = document.getElementById("Pl");
	var Mi = document.getElementById("Mi");
	var Mul = document.getElementById("Mul");
	var Div = document.getElementById("Div");
	var N_ = document.getElementById("N_");
	var N0 = document.getElementById("N0");
	var N1 = document.getElementById("N1");
	var N2 =document.getElementById("N2");
	var N3 =document.getElementById("N3");
	var N4 =document.getElementById("N4");
	var N5 =document.getElementById("N5");
	var N6 =document.getElementById("N6");
	var N7 =document.getElementById("N7");
	var N8 =document.getElementById("N8");
	var N9 =document.getElementById("N9");
	var C =document.getElementById("C");
	
	Pl.onclick = function()
	{
		if(check != sign[i])
			{
				str = str + tmp[i] + '+';
				i++;
				sign[i] = 1;
				check = sign[i];
				tmp[i]=0;
				Input.innerHTML = str;
			}
	}	
	Mi.onclick = function()
	{
		if(check != sign[i])
			{
				str = str + tmp[i] + '-';
				i++;
				sign[i] = 2;
				check = sign[i];
				tmp[i]=0;
				if(sign[0]=='0') sign[0]='';
				Input.innerHTML = str;
			}
	}	
	Mul.onclick = function()
	{
		if(check != sign[i])
			{
				str = str + tmp[i] + 'x';
				i++;
				sign[i] = 3;
				check = sign[i];
				tmp[i]=0;
				Input.innerHTML = str;
			}
	}	
	Div.onclick = function()
	{
		if(check != sign[i])
			{
				str = str + tmp[i] + '/';
				i++;
				sign[i] = 4;
				check = sign[i];
				tmp[i]=0;
				Input.innerHTML = str;
			}
	}
	N0.onclick = function()
	{
		check = 0;
		tmp[i]= tmp[i]*10 + 0;
		Input.innerHTML = str + tmp[i];
	}	
	N1.onclick = function()
	{
		check = 0;
		tmp[i]= tmp[i]*10 + 1;
		Input.innerHTML = str + tmp[i];
	}
	N2.onclick = function()
	{
		check = 0;
		tmp[i] = tmp[i]*10 + 2;
		Input.innerHTML = str + tmp[i];
	}
	N3.onclick = function()
	{
		check = 0;
		tmp[i] = tmp[i]*10 + 3;
		Input.innerHTML = str + tmp[i];
	}
	N4.onclick = function()
	{
		check = 0;
		tmp[i] = tmp[i]*10 + 4;
		Input.innerHTML = str + tmp[i];
	}
	N5.onclick = function()
	{
		check = 0;
		tmp[i] = tmp[i]*10 + 5;
		Input.innerHTML = str + tmp[i];
	}
	N6.onclick = function()
	{
		check = 0;
		tmp[i] = tmp[i]*10 + 6;
		Input.innerHTML = str + tmp[i];
	}
	N7.onclick = function()
	{
		check = 0;
		tmp[i] = tmp[i]*10 + 7;
		Input.innerHTML = str + tmp[i];
	}
	N8.onclick = function()
	{
		check = 0;
		tmp[i] = tmp[i]*10 + 8;
		Input.innerHTML = str + tmp[i];
	}
	N9.onclick = function()
	{
		check = 0;
		tmp[i] = tmp[i]*10 + 9;
		Input.innerHTML = str + tmp[i];
	}
	
	N_.onclick = function()
	{
		// calculate
		for(var j=1; j<=i; j++)
		{
			if(sign[j]==3)
				{
					sign[j]=sign[j-1];
					tmp[j]=tmp[j]*tmp[j-1];
					tmp[j-1]=0;
				}
			if(sign[j]==4)
				{
					sign[j]=sign[j-1];
					tmp[j]=tmp[j-1]/tmp[j];
					tmp[j-1]=0;
				}
		}
		
		var Sum = 0;
		if(sign[1]==1) Sum = tmp[0] + tmp[1];
		else if (sign[1]==2) Sum = tmp[0] - tmp[1];
		for(var k=2; k<=i; k++)
			{
				if(sign[k]==1) Sum = Sum + tmp[k];
				else Sum = Sum - tmp[k];
			}
		Output.innerHTML = Sum;
	}
	
	C.onclick =function()
	{
		i=0;
		tmp[i]=0;
		str='';
		Input.innerHTML = str;
		Output.innerHTML = str;
	}
}