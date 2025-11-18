

const grades = [12, 5, 17, 9, 20];

const sum = grades.reduce((acc, curr) => acc + curr, 0)
const avg = sum / grades.length

console.log(avg)