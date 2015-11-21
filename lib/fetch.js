const fetch = require('fetch-cookie')(require('node-fetch'));
import {getUrl, getHeaders} from './buildUtil.js';
import querystring from 'querystring';
import _ from 'lodash';

function s4() {
  return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1);
}

function getMainHtml() {
  const url = 'http://www.szzlb.gov.cn/LEAPV5/czww_webmap/czww_fwbmcx/';
  const headers = {
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    Host: 'www.szzlb.gov.cn',
    Pragma: 'no-cache',
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36',
  };
  return fetch(url, {
    headers,
  })
    .then(res => res.text());
}

function postType(tail) {
  console.log('postType', tail);
  const url = 'http://www.szzlb.gov.cn/LEAPV5/LEAP/Service/RPC/RPC.DO?' + tail;
  const headers = {
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    Host: 'www.szzlb.gov.cn',
    Origin: 'http://www.szzlb.gov.cn',
    Pragma: 'no-cache',
    Referer: 'http://www.szzlb.gov.cn/LEAPV5/czww_webmap/czww_fwbmcx/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36',
  };

  return fetch(url, { method: 'POST', headers })
    .then(res => res.text());
}

function callMethod(method, sid, body) {
  const url = getUrl(method, sid);
  console.log(url);
  const headers = getHeaders();
  // const form = querystring.stringify({ a: 'JTI1NUIlMjUyMmJ1aWxkaW5nc2VhcmNoJTI1MjIlMjUyQyUyNTIydHJ1ZSUyNTIyJTI1NUQ=' });
  // console.log(form); // 这里会把最后面的=变成 %3D，导致获取不到数据
  return fetch(url, {
    method: 'POST',
    headers,
    body,
  })
    .then(res => {
      return res.json();
    });
}

async function main() {
  await getMainHtml();
  await postType('type=997&_z=' + s4());
  const sid = await postType('type=997&_z=' + s4());
  console.log('sid', sid);
/*  const rst = await callMethod('app_getLogicModuleOperations', sid, 'a=JTI1NUIlMjUyMmJ1aWxkaW5nc2VhcmNoJTI1MjIlMjUyQyUyNTIydHJ1ZSUyNTIyJTI1NUQ=');
  rst.result = JSON.parse(rst.result);
  console.log('rst', JSON.stringify(rst, null, 2));*/


  const rst2 = await callMethod('getCodeValuesByParentValue', sid, 'a=JTI1NUIlMjUyMlN0cmVldCUyNTIyJTI1MkMlMjUyMjQ0MDMwNSUyNTIyJTI1NUQ=');
  rst2.result = JSON.parse(rst2.result);
  console.log('rst2', JSON.stringify(rst2, null, 2));

/*  const xxx = await callMethod('beanSearch', sid, 'a=JTI1NUIlMjUyMiUyNTdCJTI1NUMlMjUyMnBhcmFtZXRlcnMlMjU1QyUyNTIyJTI1M0ElMjU1QiUyNTdCJTI1NUMlMjUyMm5hbWUlMjU1QyUyNTIyJTI1M0ElMjU1QyUyNTIyYWRkcmVzcyUyNTVDJTI1MjIlMjUyQyUyNTVDJTI1MjJ2YWx1ZSUyNTVDJTI1MjIlMjUzQSUyNTVDJTI1MjIlMjV1NTQwRSUyNXU2RDc3JTI1dTU5MjclMjV1OTA1MyUyNTVDJTI1MjIlMjU3RCUyNTJDJTI1N0IlMjU1QyUyNTIybmFtZSUyNTVDJTI1MjIlMjUzQSUyNTVDJTI1MjJhcmVhaWQlMjU1QyUyNTIyJTI1MkMlMjU1QyUyNTIydmFsdWUlMjU1QyUyNTIyJTI1M0ElMjU1QyUyNTIyNDQwMzA1MDAwMDAwMDAwMDAwJTI1NUMlMjUyMiUyNTJDJTI1NUMlMjUyMmZsYWclMjU1QyUyNTIyJTI1M0ExNiUyNTJDJTI1NUMlMjUyMmdyb3VwJTI1NUMlMjUyMiUyNTNBJTI1NUMlMjUyMnN5c3RlbS5hcmVhaWQuY2xpZW50JTI1NUMlMjUyMiUyNTdEJTI1MkMlMjU3QiUyNTVDJTI1MjJuYW1lJTI1NUMlMjUyMiUyNTNBJTI1NUMlMjUyMmFyZWFpZCUyNTVDJTI1MjIlMjUyQyUyNTVDJTI1MjJ2YWx1ZSUyNTVDJTI1MjIlMjUzQSUyNTVDJTI1MjI0NDAzMDU5OTk5OTk5OTk5OTklMjU1QyUyNTIyJTI1MkMlMjU1QyUyNTIyZmxhZyUyNTVDJTI1MjIlMjUzQTE3JTI1MkMlMjU1QyUyNTIyZ3JvdXAlMjU1QyUyNTIyJTI1M0ElMjU1QyUyNTIyc3lzdGVtLmFyZWFpZC5jbGllbnQlMjU1QyUyNTIyJTI1N0QlMjU1RCUyNTJDJTI1NUMlMjUyMnBhZ2VOdW0lMjU1QyUyNTIyJTI1M0ExJTI1MkMlMjU1QyUyNTIycGFnZVNpemUlMjU1QyUyNTIyJTI1M0ExMiUyNTJDJTI1NUMlMjUyMm5hbWUlMjU1QyUyNTIyJTI1M0ElMjU1QyUyNTIydmlld2NvZGVidWlsZGluZ3dlYiUyNTVDJTI1MjIlMjUyQyUyNTVDJTI1MjJnZXRDb2RlVmFsdWUlMjU1QyUyNTIyJTI1M0F0cnVlJTI1MkMlMjU1QyUyNTIydG9Db3VudCUyNTVDJTI1MjIlMjUzQWZhbHNlJTI1MkMlMjU1QyUyNTIyaXNnaXMlMjU1QyUyNTIyJTI1M0FmYWxzZSUyNTJDJTI1NUMlMjUyMmphdmFDbGFzcyUyNTVDJTI1MjIlMjUzQSUyNTVDJTI1MjJjb20ubG9uZ3Jpc2UuTEVBUC5CTEwuQ2FjaGUuU2VhcmNoQnVpbGRlciUyNTVDJTI1MjIlMjU3RCUyNTIyJTI1NUQ=');
  xxx.result = JSON.parse(xxx.result);
  console.log('xxx', JSON.stringify(xxx, null, 2));*/
}

main();