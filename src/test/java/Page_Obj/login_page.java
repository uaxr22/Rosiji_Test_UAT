package Page_Obj;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

import Utility.All_Drivers;

public class login_page extends All_Drivers {
	//WebDriver driver;
	By username_textfield = By.id("usernamelogin");
	By password_textfield = By.id("loginPassword");
	By login_button = By.id("LoginBtn");
	By logout = By.linkText("Logout");
	
		
	public void Launch_browser(){
	 driver.get("http://automatetillinfinity.co.uk/");
	
}
	public void username(){
		driver.findElement(username_textfield).sendKeys("wegit");
	
	}
	public void password(){
		driver.findElement(password_textfield).sendKeys("12345678");
		
	}
public void click_login_button(){
	driver.findElement(login_button).click();
		
	}
public void confirm_homepage(){
	
}
public void logout() throws InterruptedException{
	//driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	Thread.sleep(5000);
	driver.findElement(logout).click();
	Thread.sleep(5000);
}

}
