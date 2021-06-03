import { IJlptWord } from './i-jlpt-word';

export interface IJlptListRes {
  m_end: number;
  m_items: IJlptWord[];
  m_page: number;
  m_pageSize: number;
  m_start: number;
  m_total: number;
  m_totalPage: number;
}
