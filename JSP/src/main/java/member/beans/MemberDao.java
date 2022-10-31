package member.beans;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class MemberDao {

	
	// DB 연결시  관한 변수 

	private static final String 	dbDriver	=	"oracle.jdbc.driver.OracleDriver";
	private static final String		dbUrl		=	"jdbc:oracle:thin:@192.168.0.2:1521:xe";
	private static final String		dbUser		=	"scott";
	private static final String		dbPass		=	"tiger";

		
	private static MemberDao memberDao;
	
	public static MemberDao getInstance() throws MemberException
	{
		if( memberDao == null )
		{
			memberDao =  new MemberDao();
		}
		return memberDao;
	}
	

	private MemberDao() throws MemberException
	{
		
		try{
			
			/********************************************
				1. 드라이버를 로딩
							
			*/
			Class.forName(dbDriver);
			System.out.println("MemberDAO 객체 생성 - 드라이버 로딩");
		
		}catch( Exception ex ){
			throw new MemberException("DB 연결시 오류  : " + ex.toString() );	
		}
	}
	
	/*******************************************
	 * * 회원관리테이블 MEMBERTEST 에  회원정보를 입력하는 함수
	 * @param rec
	 * @throws MemberException
	 */
	public void insertMember( Member rec ) throws MemberException
	{
		Connection con = null;
		PreparedStatement ps = null;
		try {
			 // 0. 연결 객체 얻어오기	
			con = DriverManager.getConnection(dbUrl, dbUser, dbPass);
			System.out.println("연결 성공");
			
			 // 1. sql 문장 만들기 ( insert문 )
			String sql = " INSERT INTO memberTest ( ID, PASSWORD, NAME, TEL, ADDR ) "
					+ "	VALUES ( ?, ?, ?, ?, ?) ";
			
			 // 2. sql 전송 객체 만들기
			ps = con.prepareStatement(sql);
			
			ps.setString(1, rec.getId());
			ps.setString(2, rec.getPassword());
			ps.setString(3, rec.getName());
			ps.setString(4, rec.getTel());
			ps.setString(5, rec.getAddr());
			
			 // 3. sql 전송
			ps.executeUpdate();
			 // 4. 객체 닫기
			ps.close();
			con.close();
			 
		} catch ( Exception ex ){
			throw new MemberException("멤버 입력시 오류  : " + ex.toString() );			
		}			
	}
	
	/**********************************************************
	 * * 회원관리테이블 MEMBERTEST에서 기존의 id값과 중복되는지 확인하는 함수
	 */
	public boolean isDuplicatedId( String id ) throws MemberException
	{
		boolean flag = false;
		Connection con = null;
		PreparedStatement ps = null;
		
		try{
			con = DriverManager.getConnection(dbUrl, dbUser, dbPass);
			System.out.println("연결 성공");
			
			String sql = " SELECT * FROM membertest WHERE ID=? ";
			
			ps = con.prepareStatement(sql);
			ps.setString(1, id);
			
			ResultSet rs = ps.executeQuery();
			
			
			if ( rs.next()) {
				flag = true;
			}
			ps.close();
			con.close();
			rs.close();
			
		}catch( Exception ex ){
			throw new MemberException("중복아이디 검사시 오류  : " + ex.toString() );			
		}
			
		return flag;
	}
}
