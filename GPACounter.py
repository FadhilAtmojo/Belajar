n1=float(input())
n2=float(input())
n3=float(input())
n4=float(input())
n5=float(input())

if n1>=80:
    n1=4
elif n1<80 and n1>=70:
    n1=3
elif n1<70 and n1>=60:
    n1=2
elif n1<60 and n1>=50:
    n1=1
elif n1<50:
    n1=0

if n2>=80:
    n2=4
elif n2<80 and n2>=70:
    n2=3
elif n2<70 and n2>=60:
    n2=2
elif n2<60 and n2>=50:
    n2=1
elif n2<50:
    n2=0

if n3>=80:
    n3=4
elif n3<80 and n3>=70:
    n3=3
elif n3<70 and n3>=60:
    n3=2
elif n3<60 and n3>=50:
    n3=1
elif n3<50:
    n3=0

if n4>=80:
    n4=4
elif n4<80 and n4>=70:
    n4=3
elif n4<70 and n4>=60:
    n4=2
elif n4<60 and n4>=50:
    n4=1
elif n4<50:
    n4=0

if n5>=80:
    n5=4
elif n5<80 and n5>=70:
    n5=3
elif n5<70 and n5>=60:
    n5=2
elif n5<60 and n5>=50:
    n5=1
elif n5<50:
    n5=0

ipk=float((n1+n2+n3+n4+n5)/5)

if ipk>=2.75:
    print("{:.2f}".format(ipk),"\n")
    print("PASSED")
else:
    print("{:.2f}".format(ipk),"\n")
    print("FAILED")


