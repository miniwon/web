package member.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import temp.EmpVO;

public class MemberDAO {

	final static String DRIVER	= "oracle.jdbc.driver.OracleDriver";
	final static String URL		= "jdbc:oracle:thin:@192.168.0.2:1521:xe";
	final static String USER	= "scott";
	final static String PASS	= "tiger";

	private MemberDAO() throws Exception {
		// 1. 드라이버 로딩
		Class.forName(DRIVER);
		System.out.println("MemberDAO 객체 생성 - 드라이버 로딩");
	} // MemberDAO 생성자

	// 싱글톤 패턴: 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한
	// 객체를 리턴
	static MemberDAO memberDAO = null;

	public static MemberDAO getInstance() throws Exception {
		if (memberDAO == null)
			memberDAO = new MemberDAO();
		return memberDAO;
	} // getInstance()

	/*
	 * 사용자 입력값을 받아 DB에 저장하는 역할
	 */
	public void insert(MemberVO vo) throws Exception {
		// 변수 선언
		Connection con = null;
		PreparedStatement ps = null;

		try {
			// 2. 연결 객체 얻어 오기

			con = DriverManager.getConnection(URL, USER, PASS);
			System.out.println("2. 연결 성공");

			// 3. sql 작성(REVIEW 테이블에 insert)
			String sql = " INSERT INTO REVIEW ( 본명, 별명, 이메일, 나이 ) " + " VALUES (?, ?, ?, ?)  ";
			
			// 4. 전송 객체 얻어 오기(+ ?에 값 지정)
			ps = con.prepareStatement(sql);

			ps.setString(1, vo.getName());
			ps.setString(2, vo.getNickname());
			ps.setString(3, vo.getEmail());
			ps.setInt(4, vo.getAge());

			// 5. 전송
			ps.executeUpdate();
		} finally {
			// 6. 닫기
			ps.close();
			con.close();
		} // finally
	}

} // memberDAO
