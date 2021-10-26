var appsettings;
jasmine.getFixtures().fixturesPath = 'base/';
var f = readFixtures('appsettings.json');
appsettings = JSON.parse(f);

$('#txtPIWebAPIUrl').val(appsettings.PIWebAPI);
$('#txtAssetServer').val(appsettings.AFServerName);
$('#txtPIServer').val(appsettings.DataArchiveName);
$('#txtPIWebAPIUser').val(appsettings.Username);

$(document).ready(function () {
  if (appsettings.DEFAULT_TIMEOUT_INTERVAL) {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = appsettings.DEFAULT_TIMEOUT_INTERVAL;
  }
  $.ajaxSetup({ async: false });
  deleteDatabase(
    appsettings.PIWebAPI,
    appsettings.AFServerName,
    appsettings.Username,
    appsettings.Password,
    appsettings.AuthType
  );
  $.ajaxSetup({ async: true });
});

describe('Create test environment', function () {
  it('createTestData', function () {
    $.ajaxSetup({ async: false });
    var testData = createTestData();
    $.ajaxSetup({ async: true });
    expect(testData.length).toEqual(100);
  });

  it('createDatabase', function () {
    $.ajaxSetup({ async: false });
    var statusCode = createDatabase(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(201);
  });

  it('createCategory', function () {
    $.ajaxSetup({ async: false });
    var statusCode = createCategory(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(201);
  });

  it('createTemplate', function () {
    $.ajaxSetup({ async: false });
    var statusCode = createTemplate(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.DataArchiveName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(200);
  });

  it('createElement', function () {
    $.ajaxSetup({ async: false });
    var statusCode = createElement(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(201);
  });
});

describe('Read/write tests', function () {
  it('doBatchCall', function () {
    $.ajaxSetup({ async: false });
    var statusCode = doBatchCall(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(207);
  });

  it('readAttributeSelectedFields', function () {
    $.ajaxSetup({ async: false });
    var statusCode = readAttributeSelectedFields(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(200);
  });

  it('readAttributeSnapshot', function () {
    $.ajaxSetup({ async: false });
    var statusCode = readAttributeSnapshot(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(200);
  });

  it('readAttributeStream', function () {
    $.ajaxSetup({ async: false });
    var statusCode = readAttributeStream(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(200);
  });

  it('writeDataSet', function () {
    $.ajaxSetup({ async: false });
    var statusCode = writeDataSet(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode === 202 || statusCode === 207).toEqual(true);
  });

  it('writeSingleValue', function () {
    $.ajaxSetup({ async: false });
    var statusCode = writeSingleValue(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(204);
  });

  it('updateAttributeValue', function () {
    $.ajaxSetup({ async: false });
    var statusCode = updateAttributeValue(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(204);
  });
});

describe('Delete test environment', function () {
  it('deleteElement', function () {
    $.ajaxSetup({ async: false });
    var statusCode = deleteElement(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(204);
  });

  it('deleteTemplate', function () {
    $.ajaxSetup({ async: false });
    var statusCode = deleteTemplate(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(200);
  });

  it('deleteCategory', function () {
    $.ajaxSetup({ async: false });
    var statusCode = deleteCategory(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(200);
  });

  it('deleteDatabase', function () {
    $.ajaxSetup({ async: false });
    var statusCode = deleteDatabase(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    $.ajaxSetup({ async: true });
    expect(statusCode).toEqual(200);
  });
});
