package com.jdbc.util;

public class MyUtil {//����¡ ó��
	
	//��ü ������ ����
	public int getPageCount(int numPerPage, int dataCount) {
		
		int pageCount = 0;
		
		pageCount = dataCount / numPerPage;
		
		if (dataCount % numPerPage != 0) {
			
			pageCount++;
			
		}
		
		return pageCount;
		
		
	}
	
	//Ajax ����¡ ó�� (�ڹٽ�ũ��Ʈ)
	public String pageIndexList(int currentPage, int totalPage) {
		
		int numPerBlock = 5;
		
		int currentPageSetup;
		
		int page;
		
		String strList = "";
		
		if (currentPage==0) {
			
			return "";
			
		}
		
		currentPageSetup = (currentPage/numPerBlock) * numPerBlock;
		
		if (currentPage%numPerBlock==0) {
			
			currentPageSetup = currentPageSetup - numPerBlock;
			
		}
		
		if (totalPage > numPerBlock && currentPageSetup > 0) {
			
			strList = "<a onclick='listPage(" + currentPageSetup +
					");'>������</a>&nbsp;";
			
		}
		
		page = currentPageSetup + 1;
		
		while ((page<=totalPage) && (page<=currentPageSetup+numPerBlock)) {
			
			if (page==currentPage) {
				
				strList += "<font color='Fuchsia'>" + page + 
						"</font>&nbsp;";
				
			} else {
				
				strList += "<a onclick='listPage(" + page + ");'>" +
						page + "</a>&nbsp;";
				
			}
			
			page++;
			
		}
		
		if (totalPage-currentPageSetup > numPerBlock) {
			
			strList += "<a onclick='listPage(" + page +
					");'>������</a>&nbsp;";
			
		}
		
		return strList;
		
	}
	
	//����¡ ó�� �޼ҵ�
	public String pageIndexList(int currentPage, int totalPage, String listUrl) {
		
		int numPerBlock = 5; //�������� �������� ����
		
		int currentPageSetup;//���� �������� �ִ� ����������Ʈ�� ��
		
		int page;
		
		StringBuffer sb = new StringBuffer();
		
		if (currentPage==0 || totalPage==0) {
			
			return "";
			
		}
		
		//list.jsp
		//list.jsp?searchKey=name&searchValue=30
		if (listUrl.indexOf("?")!=-1) {//�˻�
			
//			listUrl = listUrl + "&";
			listUrl += "&";
			
		} else {
			
//			listUrl = listUrl + "?";
			listUrl += "?";
			
		}
		
		//������ pageNum
		currentPageSetup = (currentPage/numPerBlock)*numPerBlock;
		
		if (currentPage % numPerBlock == 0) {
			
			currentPageSetup = currentPageSetup - numPerBlock;
			
		}
		
		//������ũ
		if (totalPage>numPerBlock && currentPageSetup>0) {
			
			sb.append("<a href=\"" + listUrl + "pageNum=" + currentPageSetup 
					+ "\">������</a>&nbsp;");
			
		}
		
		//�ٷΰ��� ������
		page = currentPageSetup + 1;
		while (page<=totalPage && page<=(currentPageSetup+numPerBlock)) {
			
			if (page==currentPage) {
				
				sb.append("<font color=#0100FF>" + page +
						"</font>&nbsp;");
				
			} else {
				
				sb.append("<a href=\"" + listUrl + "pageNum=" +
				page + "\">" + page + "</a>&nbsp;");
				
			}
			
			page++;
			
		}
		
		//������ũ
		if (totalPage - currentPageSetup > numPerBlock) {
			
			sb.append("<a href=\"" + listUrl + "pageNum=" + page
					+ "\">������</a>&nbsp;");
			
		}
		
		return sb.toString();
		
	}
	
}
