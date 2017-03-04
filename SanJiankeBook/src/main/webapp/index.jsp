
<%
	request.getRequestDispatcher("index").forward(request, response);
	System.out.println("sssss");
	System.out.println(request.toString());
	System.out.println(response.toString());
%>
