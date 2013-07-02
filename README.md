Jobvite Code Assignment
=======================

Please follow the notes below of how to submit. 

Please put your answers together in a zipped folder.

- Your solution should be functional and immediately usable out of the box
- Any library dependencies should be included in the folder

To help clarify, this is what we're looking for

- You can use any library you wish
- Your code quality will be evaluated on the following points:
- Efficiency
- Documentation / Clarity of code
- Functional (it should work)

You can place all your solutions together or onto separate files.

1.	Design a solution(as reusable as possible) for dirty checking of forms and navigate away warning: If the user has interacted with any of the controls within a form and has entered data in one or many of them and then tries to leave the page, he/she should be shown a warning prompt saying ‘There is unsaved data on the page, are you sure you want to leave’ with the options ‘Stay on page’ and ‘Leave Page’.
	The user may leave the page by clicking on a anchor which will take him away from the current page.

2.	Write a function for concatenating strings. Function should be able to accept any number of Strings. It should be able to accept arrays as well.

3.	Write a function that checks for a nested property on an object.  For ex: app.person.account.email . Design it with jquery style API in mind, for ex: val().

4.	There are 2 objects:
	```javascript
	UserTags: [
	    { blah: "blah", tagId: 12 },
        { blah: "blah", tagId: 24 }
    ];

	AllTags: [
    	{ name: "science", id: 12 },
        { name: "life", id: 24 },
        { name: "work", id: 62 },
        { name: "arts", id: 16 }
    ]
	```
	The UserTags object has the tagIds of the tags associated with this user and AllTags is a collection of all the tag objects in the application. Filter out 2 different collections:

	1.	All tag objects associated with this user.
	2.	All other tag objects.
