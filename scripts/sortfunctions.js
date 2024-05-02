import { ReversingMode, default as sortByKey } from './sortbykey.js'

export function sortProjectFavorite(projectList){
  return sortByKey(projectList, "favorite", ReversingMode.FullyReversed);
}

export function sortSkillsByLevel(skillList){
  return sortByKey(skillList, "level", ReversingMode.SemiReversed);
}

export default sortByKey
