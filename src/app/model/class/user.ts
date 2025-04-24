export class User {
    mName = '';
    version = '';
    priority = '';
    returnValue = 0;
    status = '';
    returnMessage = '';
    createdDateTime = new Date();
    createdMachineName = '';
    createdMachineIPAddress = '';
    createdProcessName = '';
    createdProcessVersion = '';
    createdUserName = '';
    createdUserRole = '';
    createdUserRoleID = '';
    createdUserID = '';
    createdUserCredentials = '';
    receivedDateTime = '';
    receivedMachineName = '';
    receivedMachineIPAddress = '';
    receivedProcessName = '';
    receivedProcess = '';
    userDBConnStr = '';
    m_Option = {
        m_ID: 0,
        m_Type: 0,
        m_Search: '',
        ml_SearchColumns: ['',''],
        m_Limit: '',
        m_OrderBy: '',
        m_Duration: '',
        m_CrDtStart: new Date(),
        m_CrDtEnd: new Date(),
        m_WhereCondition: '',

    };
    m_CategoryID = 0;
    m_PriceDate = new Date();
    m_CustomerID = '';
    m_ProductEnabledFor = '';
    

}