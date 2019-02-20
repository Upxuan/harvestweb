import myapi from '@/api/myapi.js'
export default {
  install (Vue, opt) {
    Vue.prototype.searchTypes = [
      { value: '1', label: '标题' },
      { value: '2', label: '第一作者' },
      { value: '3', label: '毕业条件归属者' },
      { value: '4', label: '审核提交者' },
      { value: '5', label: '审核人' },
    ]

    Vue.prototype.searchDate = [
      { value: '1989', label: '1989年' },
      { value: '1990', label: '1990年' },
      { value: '1991', label: '1991年' },
      { value: '1992', label: '1992年' },
      { value: '1993', label: '1993年' },
      { value: '1994', label: '1994年' },
      { value: '1995', label: '1995年' },
      { value: '1996', label: '1996年' },
      { value: '1997', label: '1997年' },
      { value: '1998', label: '1998年' },
      { value: '1999', label: '1999年' },
      { value: '2000', label: '2000年' },
      { value: '2001', label: '2001年' },
      { value: '2002', label: '2002年' },
      { value: '2003', label: '2003年' },
      { value: '2004', label: '2004年' },
      { value: '2005', label: '2005年' },
      { value: '2006', label: '2006年' },
      { value: '2007', label: '2007年' },
      { value: '2008', label: '2008年' },
      { value: '2009', label: '2009年' },
      { value: '2010', label: '2010年' },
      { value: '2011', label: '2011年' },
      { value: '2012', label: '2012年' },
      { value: '2013', label: '2013年' },
      { value: '2014', label: '2014年' },
      { value: '2015', label: '2015年' },
      { value: '2016', label: '2016年' },
      { value: '2017', label: '2017年' },
      { value: '2018', label: '2018年' },
      { value: '2019', label: '2019年' },
    ]

  }
}
