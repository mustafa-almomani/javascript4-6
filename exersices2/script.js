/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
var avg =prompt(avg)
if (avg>=90 && avg<100)
    {
        window.alert("A")
    }
    else if (avg>=80 && avg<90)
        {
            window.alert("B")
        }
        else if (avg>=70 && avg<80)
            {
                window.alert("c")
            }
            else if (avg>=60 && avg<70)
                {
                    window.alert("d")
                }
                else if (avg>=50 && avg<60)
                    {
                        window.alert("e")
                    }
                    else{
                        window.alert("Fail")
                    }
                    

