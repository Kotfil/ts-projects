test("should tale old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);


    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take chiper 160$", () => {
    const courses = [
        {title: "css", price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
    ];


    const chipCourses = courses.filter(course => course.price < 160);


    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].price).toBe(110);
    expect(chipCourses[1].title).toBe('React');
});

test('get only completed task ', () => {
    const tasks = [
        {id: 1,title: 'bread', isDone: true},
        {id: 2,title: 'milk', isDone: false},
        {id: 3,title: 'sugar', isDone: true},
        {id: 4,title: 'chips', isDone: false}
    ]

    const completedTask = tasks.filter(task => task.isDone === true)

    console.log(completedTask)
})