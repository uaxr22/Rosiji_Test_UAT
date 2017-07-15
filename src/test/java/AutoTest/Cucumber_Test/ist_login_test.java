package AutoTest.Cucumber_Test;

import Page_Obj.login_page;
import Utility.All_Drivers;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ist_login_test {
	All_Drivers Login_step_def = new All_Drivers();
	login_page login_steps = new login_page();
	
	@Given("^am on the Landing Page$")
	public void am_on_the_Landing_Page() throws Throwable {
		Login_step_def.set_driver("firefox");
		login_steps.Launch_browser();
 //   driver.get("http://automatetillinfinity.co.uk/");
}

	@Given("^I enter my Username as wegit$")
	public void i_enter_my_Username_as_wegit() throws Throwable {
		login_steps.username();
	  // driver.findElement(By.id("usernamelogin")).sendKeys("wegit");
	}

	@Given("^I enter my Password as (\\d+)$")
	public void i_enter_my_Password_as(int arg1) throws Throwable {
		login_steps.password();
		//driver.findElement(By.id("loginPassword")).sendKeys("12345678");
	}

	@When("^I click Login button$")
	public void i_click_Login_button() throws Throwable {
		login_steps.click_login_button();
	   // driver.findElement(By.id("LoginBtn")).click();
	}

	@Then("^am on the Home Page$")
	public void am_on_the_Home_Page() throws Throwable {
	    login_steps.logout();
	}

}
