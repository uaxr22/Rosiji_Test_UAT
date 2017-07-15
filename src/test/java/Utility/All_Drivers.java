package Utility;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class All_Drivers {
	
	public static WebDriver driver;

	public void set_driver(String browser) {
		if (driver == null) {
			if (browser.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver", "C:\\Gecko\\geckodriver.exe");
				driver = new FirefoxDriver();
			} 
		}
	}
	//@After
	//public void StopSession(){
		//driver.quit();
	//}

}
