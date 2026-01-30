const { test, expect } = require('@playwright/test');

// Test data array - Add all your test cases here
const testCases = [
  // ===== POSITIVE TESTS (24) =====
  {
    id: 'Pos_Fun_0001',
    name: 'Convert a short daily need statement',
    input: 'mata kanna dheyak oonee',
    expected: 'මට කන්න දෙයක් ඕනේ',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0002',
    name: 'Convert a short interrogative greeting',
    input: 'mokoo venne ithin?',
    expected: 'මොකෝ වෙන්නෙ ඉතින්?',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0003',
    name: 'Convert a short imperative command',
    input: 'pitipassata velaa inna',
    expected: 'පිටිපස්සට වෙලා ඉන්න',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0004',
    name: 'Convert a short negative sentence',
    input: 'mata eeka karanna baee',
    expected: 'මට ඒක කරන්න බෑ',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0005',
    name: 'Convert a simple past tense sentence',
    input: 'mama iiyee iskoolee giyaa',
    expected: 'මම ඊයේ ඉස්කෝලේ ගියා',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0006',
    name: 'Convert a simple future tense sentence',
    input: 'api heta gamanak yamu',
    expected: 'අපි හෙට ගමනක් යමු',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0007',
    name: 'Convert a compound sentence with two actions',
    input: 'api kaeema kanna yanavaa saha passe sellam karanavaa',
    expected: 'අපි කෑම කන්න යනවා සහ පස්සෙ සෙල්ලම් කරනවා',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0008',
    name: 'Convert a complex conditional sentence',
    input: 'dhavasama vaessa unath iskoole yanna epaeyi',
    expected: 'දවසම වැස්ස උනත් ඉස්කෝලෙ යන්න එපැයි',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0009',
    name: 'Convert a polite request sentence',
    input: 'karunaakaralaa mata meekata udhavu karanna puluvandha?',
    expected: 'කරුනාකරලා මට මේකට උදවු කරන්න පුලුවන්ද?',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0010',
    name: 'Convert a short informal phrase',
    input: 'meeka kiyavapanko',
    expected: 'මේක කියවපන්කො',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0011',
    name: 'Convert a short positive sentence',
    input: 'mama adhama eeka karanavaa',
    expected: 'මම අදම ඒක කරනවා',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0012',
    name: 'Convert a sentence with repeated words for emphasis',
    input: 'hari hari oyaa dhannavaa',
    expected: 'හරි හරි ඔයා දන්නවා',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0013',
    name: 'Convert a sentence using a singular pronoun',
    input: 'mama vaeda karanavaa',
    expected: 'මම වැඩ කරනවා',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0014',
    name: 'Convert a sentence using a plural pronoun',
    input: 'api heta pansal yamu',
    expected: 'අපි හෙට පන්සල් යමු',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0015',
    name: 'Convert a present tense sentence with a time reference',
    input: 'mama dhaen ehe vaeda karanavaa',
    expected: 'මම දැන් එහෙ වැඩ කරනවා',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0016',
    name: 'Convert a mixed-language sentence with technical terms',
    input: 'adha Microsoft Teams ekee meeting ekak thiyenavaa',
    expected: 'අද Microsoft Teams එකේ meeting එකක් තියෙනවා',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0017',
    name: 'Convert a sentence containing a place name',
    input: 'apee maamaa heta Dubai yanna hadhanne',
    expected: 'අපේ මාමා හෙට Dubai යන්න හදන්නෙ',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0018',
    name: 'Convert a sentence containing English abbreviations',
    input: 'magee PC ekee CPU ekeyi GPU ekeyi avulak thiyenavaa',
    expected: 'මගේ PC එකේ CPU එකෙයි GPU එකෙයි අවුලක් තියෙනවා',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0019',
    name: 'Convert a sentence with currency value',
    input: 'eeka Rs. 3500 k vitharayi',
    expected: 'ඒක Rs. 3500 ක් විතරයි',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0020',
    name: 'Convert a sentence with time format',
    input: 'adha meeting eka 6.00 PM patan gannavaa',
    expected: 'අද meeting එක 6.00 PM පටන් ගන්නවා',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0021',
    name: 'Convert a sentence containing multiple spaces',
    input: 'mata   raeeta podi   vaedak thiyenavaa',
    expected: 'මට   රෑට පොඩි   වැඩක් තියෙනවා',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0022',
    name: 'Convert a multi-line Singlish input',
    input: 'mama adha panthi yanavaa oyaa adha enavadha?',
    expected: 'මම අද පන්ති යනවා ඔයා අද එනවද?',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0023',
    name: 'Convert an informal slang-based sentence',
    input: 'adoo supiri machan vaedee niyameta karaa',
    expected: 'අඩෝ සුපිරි මචන් වැඩේ නියමෙට කරා',
    shouldPass: true
  },
  {
    id: 'Pos_Fun_0024',
    name: 'Convert a long paragraph-style Singlish input',
    input: 'apee ratata aethi vechcha dharunu aapadhaa thathvaya nisaa jiivitha haani vageema dheepala haanith godak aethi vunaa. nuvara paeththe paaraval godak avahira vunaa saha gamanaagamanayata godak avahirathaa aethi vunaa. mee venakota ee paaraval hadhamin pavathinavaa. ikmanin rata yahapath athata haereevi. ee vageema minissuth eegollange jana jiivithayath yahapath athata haereevi.',
    expected: 'අපේ රටට ඇති වෙච්ච දරුනු ආපදා තත්වය නිසා ජීවිත හානි වගේම දේපල හානිත් ගොඩක් ඇති වුනා. නුවර පැත්තෙ පාරවල් ගොඩක් අවහිර වුනා සහ ගමනාගමනයට ගොඩක් අවහිරතා ඇති වුනා. මේ වෙනකොට ඒ පාරවල් හදමින් පවතිනවා. ඉක්මනින් රට යහපත් අතට හැරේවි. ඒ වගේම මිනිස්සුත් ඒගොල්ලන්ගෙ ජන ජීවිතයත් යහපත් අතට හැරේවි.',
    shouldPass: true
  },
  
  
  // ===== NEGATIVE TESTS (10) =====
  {
    id: 'Neg_Fun_0001',
    name: 'Convert sentence with no word separation',
    input: 'mamagamanakyanavaa',
    expected: 'මම ගමනක් යනවා',
    shouldPass: false
  },
  {
    id: 'Neg_Fun_0002',
    name: 'Convert sentence with excessive slang',
    input: 'ela bn supiri scene ekak thamaa',
    expected: 'එල බන් සුපිරි scene එකක් තමා',
    shouldPass: false
  },
  {
    id: 'Neg_Fun_0003',
    name: 'Convert grammatically incorrect sentence',
    input: 'oya yanavada mama ennena',
    expected: 'ඔයා යනවද මම එන්නෑ',
    shouldPass: false
  },
  {
    id: 'Neg_Fun_0004',
    name: 'Convert a sentence containing English technical/brand terms',
    input: 'magee graphic card eka Nvidia',
    expected: 'මගේ graphic card එක Nvidia',
    shouldPass: false
  },
  {
    id: 'Neg_Fun_0005',
    name: 'Convert input with mixed scripts',
    input: 'මම gedhara yanavaa',
    expected: 'මම ගෙදර යනවා',
    shouldPass: false
  },
  {
    id: 'Neg_Fun_0006',
    name: 'Convert a sentense with same sound but different letters',
    input: 'mama wathura bonavaa',
    expected: 'මම වතුර බොනවා',
    shouldPass: false
  },
  {
    id: 'Neg_Fun_0007',
    name: 'Convert a Sinhala name that contains lowercase and uppercase letters',
    input: 'Nimal Perera',
    expected: 'නිමල් පෙරේරා',
    shouldPass: false
  },
  {
    id: 'Neg_Fun_0008',
    name: 'Convert inconsistent casing input',
    input: 'MaMa PaNsAlAtA YaNaVaA',
    expected: 'මම පන්සලට යනවා',
    shouldPass: false
  },
  {
    id: 'Neg_Fun_0009',
    name: 'Convert sentence with ambiguous numeric words',
    input: 'mama baeluve mee deka ma gannavadha kiyalaa',
    expected: 'මම බැලුවෙ මේ 2 ම ගන්නවද කියලා',
    shouldPass: false
  },
  {
    id: 'Neg_Fun_0010',
    name: 'Convert long unstructured input',
    input: 'mama gedhara yanawa oya enne na kiiwa nisaa matath weda wagayak set unaa eka nisa yannawa wenne aulak ganna epa man gihin oyata call ekak gannam',
    expected: 'මම ගෙදර යනවා ඔයා එන්නෙ නෑ කිව්ව නිසා. මටත් වැඩ වගයක් සෙට් උනා. ඒක නිසා යන්න වෙන්නෙ. අවුලක් ගන්න එපා. මම ගිහින් ඔයාට call එකක් ගන්නම්.',
    shouldPass: false
  },
  
];


// Main test function that runs for each test case
testCases.forEach((testCase) => {
  test(`${testCase.id} - ${testCase.name}`, async ({ page }) => {
    // Step 1: Go to the website
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle'); // Wait for page to fully load

    // Step 2: Locate the input and output fields
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const outputField = page.locator('div.bg-slate-50');

    // Step 3: Clear any existing input
    await inputField.clear();
    await page.waitForTimeout(500);

    // Step 4: Type the input text
    await inputField.fill(testCase.input);

    // Step 5: SMART WAITING - Wait for output to contain actual Sinhala text
    // This waits up to 10 seconds for the output to appear
    try {
      await page.waitForFunction(
        (expectedLength) => {
          const outputDiv = document.querySelector('div.bg-slate-50');
          return outputDiv && outputDiv.textContent.trim().length > 0;
        },
        null, // no argument needed
        { timeout: 10000 } // wait up to 10 seconds
      );
    } catch (error) {
      console.log(`⚠️ Warning: Output did not appear within 10 seconds for ${testCase.id}`);
    }

    // Step 6: Get the actual output
    const actualOutput = await outputField.textContent();
    const trimmedOutput = actualOutput.trim();

    // Step 7: Print results to console
    console.log('─────────────────────────────────');
    console.log(`Test: ${testCase.id}`);
    console.log(`Input: ${testCase.input}`);
    console.log(`Expected: ${testCase.expected}`);
    console.log(`Actual: ${trimmedOutput}`);
    console.log(`Match: ${trimmedOutput === testCase.expected ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Should Pass: ${testCase.shouldPass ? 'Yes' : 'No (Expected Failure)'}`);
    console.log('─────────────────────────────────');

    // Step 8: Assertion
    if (testCase.shouldPass) {
      // Positive test: should match
      expect(trimmedOutput).toBe(testCase.expected);
    } else {
      // Negative test: should NOT match (showing system failure)
      expect(trimmedOutput).toBe(testCase.expected);
    }
  });
});



// ===== UI TEST =====
test('Pos_UI_0001 - Sinhala output updates automatically in real-time', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForTimeout(2000);

  const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputField = page.locator('div.bg-slate-50');

  // Step 1: Verify initial state is empty
  let output = await outputField.textContent();
  console.log('Initial output:', output.trim());
  expect(output.trim()).toBe('');

  // Step 2: Type text and wait for real-time conversion
  await inputField.fill('ammaa adha iskoole giyaa');
  
  // Wait longer for the output to appear (increased from 500ms to 3000ms)
  await page.waitForTimeout(3000);
  
  output = await outputField.textContent();
  
  console.log('─────────────────────────────────');
  console.log('Test: Pos_UI_0001 (Real-time update)');
  console.log('Input: ammaa adha iskoole giyaa');
  console.log('Actual Output:', output.trim());
  console.log('Output length:', output.trim().length);
  console.log('Output appeared: ', output.trim() !== '' ? '✅ YES' : '❌ NO');
  console.log('─────────────────────────────────');

  // Verify output is not empty (real-time conversion happened)
  expect(output.trim()).not.toBe('');
  
  // Verify the actual Sinhala output is correct
  expect(output.trim()).toBe('අම්මා අද ඉස්කෝලෙ ගියා');
});