# def mergesort(list_a, l, r):
#     length = len(list_a)
#     if r > l:
#         mid = (l + r) // 2
    
#     # Split
#     mergesort(list_a, l, mid)
#     mergesort(list_a, mid+1, r)
#     i = l
#     j = mid+1
#     k = 0
#     temp_list = [0]*(r-l+1)
    
#     # Merge
#     while i <= mid and j <= r:
#         if list_a[i] < list_a[j]:
#             temp_list[k] = list_a[i]
#             i+=1
#         else:
#             temp_list[k] = list_a[j]
#             j+=1
#             k+=1
#     while i <= mid:
#         temp_list[k] = list_a[i]
#         i+=1
#         k+=1
#     while j <= r:
#         temp_list[k] = list_a[j]
#         j+=1
#         k+=1
#     for i in range(len(temp_list)):
#         list_a[l+i] = temp_list[i]
        
# list_a = [5, 4, 2, 1, 3]
# mergesort(list_a, 0, len(list_a)-1)
# print(list_a)



# arrayGlobal = [7, 4, 5, 1, 2,3,6]
# length = len(arrayGlobal)
# for i in range(length-1):
#     terkecil = i
#     for j in range(i+1, length):
#         if arrayGlobal[j] < arrayGlobal[terkecil]:
#             terkecil = j
#     par = arrayGlobal[terkecil]
#     arrayGlobal[terkecil] = arrayGlobal[i]
#     arrayGlobal[i] = par
    
# print(arrayGlobal)

# arrayGlobal = [3, 5, 7, 1, 4, 2, 6]
# length = len(arrayGlobal)
# for i in range(length-1):
#     for j in range(length-1):
#         if arrayGlobal[j] > arrayGlobal[j+1]:
#             par = arrayGlobal[j]
#             arrayGlobal[j] = arrayGlobal[j+1]
#             arrayGlobal[j+1] = par
# print(arrayGlobal)

def mergeSort(myList):
    if len(myList) > 1:
        mid = len(myList) // 2
        left = myList[:mid]
        right = myList[mid:]

        # Recursive call on each half
        mergeSort(left)
        mergeSort(right)

        # Two iterators for traversing the two halves
        i = 0
        j = 0
        
        # Iterator for the main list
        k = 0
        
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
              # The value from the left half has been used
              myList[k] = left[i]
              # Move the iterator forward
              i += 1
            else:
                myList[k] = right[j]
                j += 1
            # Move to the next slot
            k += 1

        # For all the remaining values
        while i < len(left):
            myList[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            myList[k]=right[j]
            j += 1
            k += 1

myList = [54,26,93,17,77,31,44,55,20]
mergeSort(myList)
print(myList)

arrayGlobal = [1,2,3,4]

def fadhil(x):
    if x==3:
        fadhil(x-1)
    luas = x/2
    print(luas)

fadhil(3)

thislist = ["apple", "banana", "cherry"]
mylist = thislist.copy()
print(mylist)

kataBuah = "orange","melon"
print(list(kataBuah))











