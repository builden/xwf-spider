import cfg from './lib/cfg.js';
import {getSchool, getVillage, getSchoolByVillage} from './lib/xd-api.js';
import * as fs from 'fs-extra-promise-es6';
import _ from 'lodash';

const AREA_SCHOOLS = './db/area-schools.json';
const SCHOOL_VILLAGE = './db/school-village.json';

async function getAllAreaSchools() {
  const areaSchools = {};
  for (const area of _.keys(cfg.areaes)) {
    const schools = areaSchools[area] = {};
    for (const v of _.keys(cfg.schtype)) {
      const rst = schools[v] = await getSchool({ area: cfg.areaes[area], schtype: cfg.schtype[v] });
    }
  }

  await fs.writeFile(AREA_SCHOOLS, JSON.stringify(areaSchools, null, 2));
}

async function getSchoolVillage() {
  const schs = [];
  const areaSchs = fs.readJsonSync(AREA_SCHOOLS);
  const schSet = new Set();
  console.log(_.keys(areaSchs));
  _.keys(areaSchs).forEach((area) => {
    if (areaSchs[area].all) {
      console.log(area, 'school num:', areaSchs[area].all.length);
      areaSchs[area].all.forEach(sch => schSet.add(sch));
    }
  });
  console.log('all school num:', schSet.size);
  let i = 0;
  for (const sch of schSet) {
    console.log('current at: ', i++);
    schs.push(await getVillage({ area: '', school: sch }));
  }

  await fs.writeFile(SCHOOL_VILLAGE, JSON.stringify(schs, null, 2));
}

async function main() {
  try {
    await getAllAreaSchools();
    await getSchoolVillage();
  } catch (e) {
    console.error(e);
  }
}

main();
