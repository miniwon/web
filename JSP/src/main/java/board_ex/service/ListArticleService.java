package board_ex.service;

import java.util.List;

import board_ex.model.*;
import guest.model.Message;
import guest.model.MessageDao;

public class ListArticleService {
	private static ListArticleService instance;
	public static ListArticleService getInstance()  throws BoardException{
		if( instance == null )
		{
			instance = new ListArticleService();
		}
		return instance;
	}
	
	// 페이지 처리
	private int totalRecCount;		// 전체 레코드 수	
	private int pageTotalCount;		// 전체 페이지 수
	private int countPerPage = 3;	// 한페이지당 레코드 수
	
	
	public List<BoardVO> getArticleList(String pNum) throws BoardException {
		
		int pageNum = 1;
		if(pNum != null) pageNum = Integer.parseInt(pNum);
		
		/*
		 * 		페이지 번호		시작 레코드 번호		끝 레코드 번호
		 * 			1				1					3
		 * 			2				4					6
		 * 			3				7					9
		 */
		
		int endRow = pageNum * countPerPage;
		int startRow =  endRow - 2;
		
		// 전체 레코드를 검색해 온다면
		List<BoardVO> bList = BoardDao.getInstance().selectList(startRow, endRow);			
		return bList;	
	}
	
	public int getTotalPage() throws BoardException {
		// 전체 레코드 수
		totalRecCount = BoardDao.getInstance().getTotalCount();
		
		// 전체 레코드 수에 따른 페이지 수 리턴
		/*
		 * 전체 레코드 수		페이지 수
		 * 		9				3
		 * 		10				4
		 * 		11				4
		 * 		12				4
		 * 		13				5
		 */		
		
		pageTotalCount = (int)Math.ceil(totalRecCount/(double)countPerPage);
		
		return pageTotalCount;
		
		
	}
	
	
}
