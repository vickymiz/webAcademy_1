// 1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
// 2. Вывести в консоль простые числа от 1 до n.
// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for)
// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных. => in home
// 5. Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.

//1
function consoleNumbers(n) {
 for (let i = 1; i <= n; i++) {
    console.log( i ); 
 }
}
//2
consoleNumbers(10);
consoleNumbers(5);

function isSimple(n) {
    for (let d=2; d < n; d++) {
        if (n % d === 0) {
            return false;
        }
    }

    return true;
}

function consoleSimpleNumbers (n) {
    for(let q = 1; q <= n; q++) {
        if (isSimple(q)) {
            console.log(q);
        }       
    }
}

//3
function multipleOf(n, k) {
 for (let i = 1; i <= n; i++) {
     if(i % k === 0) {
         console.log(i);
     }
 }
}

multipleOf(100, 5);
multipleOf(10, 3);

function getNextSimpleNumber(n) {
    let m = n + 1;
     while (!isSimple(m)) {
         m++;
     }

     return m;
}

console.log( getNextSimpleNumber(13));

//задача с тараканами

function getTime (mine = 5, speed = 1, slowdown = .5) {
    let totalTime = 0;
    let currentHeight = 0;

    for ( ; currentHeight < mine; ) {
        totalTime++
        currentHeight += speed;

        if (currentHeight < mine) {
            currentHeight -= slowdown;

        }
    }
    if (currentHeight > mine) {
        const deltaTime = (currentHeight - mine) / speed;
        totalTime-= deltaTime;
    }
    
    return totalTime;
}