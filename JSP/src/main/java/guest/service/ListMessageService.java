package guest.service;

import guest.model.Message;
import guest.model.MessageDao;
import guest.model.MessageException;

import java.util.List;

public class ListMessageService {

	//-------------------------------------------------------------------
	private int totalRecCount;		// 전체 레코드 수	
	private int pageTotalCount;		// 전체 페이지 수
	private int countPerPage = 3;	// 한페이지당 레코드 수
	
	private static ListMessageService instance;
	
	public static ListMessageService	getInstance() throws MessageException
	{
		if( instance == null )
		{
			instance = new ListMessageService();
		}
		return instance;
	}
	
	private ListMessageService()
	{
		
	}
	
	public List <Message> getMessageList(String pNum) throws MessageException
	{
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
		List <Message> mList = MessageDao.getInstance().selectList(startRow, endRow);			
		return mList;
	}
	
	public int getTotalPage() throws MessageException {
		// 전체 레코드 수
		totalRecCount = MessageDao.getInstance().getTotalCount();
		
		// 전체 레코드 수에 따른 페이지 수 리턴
		/*
		 * 전체 레코드 수		페이지 수
		 * 		9				3
		 * 		10				4
		 * 		11				4
		 * 		12				4
		 * 		13				5
		 */
		
//		pageTotalCount = totalRecCount / countPerPage;
//		if(totalRecCount % countPerPage > 0 ) pageTotalCount++;
		
		// 나의 식
		pageTotalCount = (int)Math.ceil(totalRecCount/(double)countPerPage);
		

		return pageTotalCount;
	}
	
	
}
