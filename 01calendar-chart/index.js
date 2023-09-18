let data = [
  { deployCount: 5, month: 02, year: 2000 },
  { deployCount: 20, month: 01, year: 2000 },
  { deployCount: 55, month: 05, year: 2000 },
  { deployCount: 45, month: 03, year: 2000 },
  { deployCount: 54, month: 04, year: 2000 },
  { deployCount: 23, month: 06, year: 2000 },
  { deployCount: 5, month: 07, year: 2000 },
  { deployCount: 8, month: 09, year: 2000 },
  { deployCount: 87, month: 10, year: 2000 },
  { deployCount: 97, month: 11, year: 2000 },
  { deployCount: 55, month: 08, year: 2000 },
  { deployCount: 5, month: 02, year: 1990 },
  { deployCount: 20, month: 01, year: 1991 },
  { deployCount: 5, month: 05, year: 1992 },
  { deployCount: 45, month: 03, year: 1993 },
  { deployCount: 54, month: 04, year: 1994 },
  { deployCount: 33, month: 06, year: 1995 },
  { deployCount: 5, month: 07, year: 1996 },
  { deployCount: 8, month: 09, year: 1997 },
  { deployCount: 87, month: 10, year: 1998 },
  { deployCount: 97, month: 11, year: 1999 },
  { deployCount: 55, month: 08, year: 2000 },
  { deployCount: 200, month: 12, year: 2000 },
  { deployCount: 88, month: 12, year: 2001 },
]


/**
 * data
 */

/**
 * 
 * @param {*} data 
 * @param {*} year 
 */
function formatterdate (data, year) {
  //筛选出所有的年份去重
  let yearmun = [...new Set(data.map(i => i.year))]

  //取到最大的年
  let maxyear = Math.max.apply(null, yearmun)

  //要查看多少年的数据
  let lookyear = year

  console.log(year)
  //要遍历的年10年
  let traverselist = []

  //判断取全部年还是取指定的年的数量
  if (lookyear == null) {
    traverselist = yearmun.sort((a, b) => a - b)
  } else if (lookyear == 1) {
    traverselist = [maxyear]
  } else {
    // 存年的list取10年
    for (let i = 0; i < lookyear; i++) {
      traverselist.unshift(maxyear - i)
    }

  }

  //年 排序后的数据
  let yearlist = data.sort((a, b) => a.year - b.year)

  //要reurn 的数据
  let arr = []
  console.log(traverselist)

  let y //当前遍历的年
  traverselist.forEach((i, j) => {
    y = i
    //查询到当前数据的count
    let newyear = yearlist.filter(item => item.year == y).sort((a, b) => a.month - b.month)
    for (let k = 0; k < 12; k++) {
      // console.log(newyear, 'y')
      let findmonth = newyear.find(item => item.month == (k + 1))
      // console.log(findmonth, '查')
      if (findmonth) {
        arr.push([j, k, findmonth.deployCount])
      } else {
        arr.push([j, k, 0])

      }
    }
  })
  // console.log(arr)
  return {
    map: arr,
    year: traverselist,
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  }
}
let data1 = formatterdate(data, 10)