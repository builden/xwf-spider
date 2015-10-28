// import fetch from 'isomorphic-fetch';

export const SEL_AREA = 'SEL_AREA';
export const SEL_SCHTYPE = 'SEL_SCHTYPE';

// 选择区域
export function selectArea(area) {
  return {
    type: SEL_AREA,
    area,
  };
}

// 选择学校类型
export function selSchtype(schtype) {
  return {
    type: SEL_SCHTYPE,
    schtype,
  };
}
