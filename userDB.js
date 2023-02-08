@Test(expected = ParseException.class)
public void testGetIdentificationCodeWithLongCode() throws ParseException 
{
    List<String> instance = new ArrayList<>();
    fail("Should have failed since the identification code is too long");
}
