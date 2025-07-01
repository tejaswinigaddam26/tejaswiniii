'''
a=[1,2,1,2,1,4,1,5,6,7,7,8]
s=set(a)
print(s)
if 9 in s:
    print("element is present")
else:
    print("not present")
'''    
'''for i in range(10):
    print(i)
'''
'''
for i in range(1,11):
    print(i,end=" ")    #if we give end value then it will get in single line

'''
'''
for i in range(1,11):
    print(i) #otherwise it will come in step by step
''' 
'''
i=11
while i<=10:
    print(i,end=' ')
'''
'''a=[1,2,1,2,1,4,5,6,7,7,8,8,2,2,1]
n=len(a)
target=2
for i in range(n):
    if a[i]==target:
        print("true")
        break
for i in a:
    if i==target:
        print("True")
    else:
        print("flase")    
        break
'''
'''a=[1,2,1,2,1,4,5,6,1,8,1,9,7,9,]
n=len(a)
target=9
count=0
for i in range(n):
    if a[i]==target:
        count+=1
print(count)        
'''
'''
a=[1,2,1,1,3,4,7,8,5,4,6,2,1,1]
d={} #dictionary,key:value pairs
for i in a:
    if i in d:
        d[i]+=1
    else:
        d[i]=1
print(d)        
'''
a=[1,2,3,1,2,1,2,4,56,7,8,9,2,2,1]
maxi=a[0]
for i in a:
    if i>maxi:
        maxi=i
print(maxi)