package temp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class EmpDAO {

	final static String URL = "jdbc:oracle:thin:@192.168.0.2:1521:xe";
	final static String USER = "scott";
	final static String PASS = "tiger";
	
	private EmpDAO() throws Exception {
		// 1. 드라이버 로딩
		Class.forName("oracle.jdbc.driver.OracleDriver");
		System.out.println("EmpDAO 객체 생성 - 드라이버 로딩");
	}
	
	// 싱글톤 패턴: 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴
	static EmpDAO empDAO = null;
	public static EmpDAO getInstance() throws Exception {
		if(empDAO == null) empDAO = new EmpDAO();
		return empDAO;
	}
	
	/*
	 * 사용자 입력값을 받아 DB에 저장하는 역할
	 */
	public void insert(EmpVO vo) throws Exception {
		// 변수 선언
		Connection con = null;
		PreparedStatement ps = null;
		
		try {
			// 2. 연결 객체 얻어 오기

			con = DriverManager.getConnection(URL, USER, PASS);
			System.out.println("2. 연결 성공");

			// 3. sql 작성(emp 테이블에 insert)
			String sql = " INSERT INTO EMP ( EMPNO, ENAME, DEPTNO, JOB, SAL) " + " VALUES (?, ?, ?, ?, ?)  ";

			// 4. 전송 객체 얻어 오기(+ ?에 값 지정)
			ps = con.prepareStatement(sql);

			ps.setInt(1, vo.getEmpno());
			ps.setString(2, vo.getEname());
			ps.setInt(3, vo.getDeptno());
			ps.setString(4, vo.getJob());
			ps.setInt(5, vo.getSal());

			// 5. 전송
			ps.executeUpdate();
		} finally {
			// 6. 닫기
			ps.close();
			con.close();
		}
	}

}
