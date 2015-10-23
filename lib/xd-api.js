// http://topic.xuedou.com/html/cxxt/index.php/Xqcx

import request from 'superagent';

function postData(url, data) {
  return new Promise((resolve, reject) => {
    request.post(url)
      .send(data)
      .set('X-Requested-With', 'XMLHttpRequest')
      .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36')
      .set('Cache-Control', 'no-cache')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .end((err, res) => {
        if (err) return reject(err);
        try {
          resolve(JSON.parse(res.text));
        } catch (e) {
          reject(e);
        }
      });
  });
}

// 查询行政区有哪些学校
// area: 光明区
export function getSchool({area, schtype}) {
  const url = 'http://topic.xuedou.com/html/cxxt/index.php/Xqcx/backSch';
  return postData(url, {area, schtype});
}

// 查询学校对应的小区
export function getVillage({area, school}) {
  const url = 'http://topic.xuedou.com/html/cxxt/index.php/Xqcx/backData';
  return postData(url, {area, school});
}

// 查询小区对应的学校
export function getSchoolByVillage({village}) {
  const url = 'http://topic.xuedou.com/html/cxxt/index.php/Xqcx/backVil';
  return postData(url, {village});
}
