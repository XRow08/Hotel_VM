export async function onSetDeadline() {
  /* try {
    const { dateToTimestamp } = DateFormat;

    const contract = Pulse__factory.connect(contractAddress, provider);

    const gasLimit = await calculateGasLimit(contract, "", []);

    const timestamp = dateToTimestamp();
    const response = await contract.setDeadline([]);
    console.log(response);

    const tx = await response.wait();
    console.log(tx);

    return tx;
  } catch (error) {
    console.log(error);
    throw error;
  } */
}

export async function onCompleteActivity(address: string) {
  try {
    console.log(address);
    const options = {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiNjg1NWUxNDQtOTA4OC00NDViLTk4OGEtYjA5NmE1MjU2Njg3Iiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDkzNDI3Mn0.INTvUjvU2vC0aW05irbXOaPX6v0ACTbKEAY5Fe5mFrXj20bx-6Ovs8_7OqKmu_2wDn707-FfQJ1eUmxsVt9QaDx47HEclfv4o-Bs8jym58Epx47v8E5TIyK0fPmDlZ_gZsho2wfhr_J_l6zQ6yo7_OndQ5LVihSeRIwEHCLwhyZ31idUaoiGWwz0fL95DdfOhJDr_sD1rODCozKS0DISbb8GnU_q95p-kZwL1kLbW6eVefIXcNcSZK2KKj-ByVQr3ON1RhYyvIvFc0VuXreAco3iczngN5_rQZTPFiXqzXJufzR1fN5UhxU5yPGgLvXU_eWg2bhFY4bKVLkJzi1uYVn8QKropwEoBO8Iw8TamJPQEuYWk22wwA8gd0A14KNUVmCa9JirAoawwQwhqTuxSa2MfgAIYIXh3CBARis_IkL58zO02rHXR78G7DRfZjrV_ltJCEdB6cIFE9xwenaKjns6YP_21QQ0OyhjG4fdwobqWz3AT22VyZLrupvzdvVeW7eAhf6MQRXli5WGApYVgyFoniAn_gnXr9e8voXZ9oK8RbBPkFBzf1PgyR8jk1U-RiP4bU1V1AFfJDNR5A97CayEs-z0NMxyzmF17I_H_M-dotAQVDT1z_icMA50HoOrpB_M2YkmJQ0mHe_dSxJSxr5YAUioKtJHBw2vMT8fO9Y",
          "Content-Type": "application/json",
      },
      body: `{"walletId":"24466965-893d-43bf-9cc4-e3ad29bddb61","contractAddress":"0x0a5d567cfa504437A7fe1C859754513aD2dDfa96","operations":[{"argumentsValues":["${address}",true],"messageValue":0,"functionSignature":"completeActivity(address, bool)"}]}`,
    };

    const response = await fetch(
      "https://protocol-sandbox.lumx.io/v2/transactions/custom",
      options
    );
    const res = await response.json();
    console.log("onCompleteActivity", res);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function onMintToken(address: string) {
  try {
    console.log(address);
    const options = {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiNjg1NWUxNDQtOTA4OC00NDViLTk4OGEtYjA5NmE1MjU2Njg3Iiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDkzNDI3Mn0.INTvUjvU2vC0aW05irbXOaPX6v0ACTbKEAY5Fe5mFrXj20bx-6Ovs8_7OqKmu_2wDn707-FfQJ1eUmxsVt9QaDx47HEclfv4o-Bs8jym58Epx47v8E5TIyK0fPmDlZ_gZsho2wfhr_J_l6zQ6yo7_OndQ5LVihSeRIwEHCLwhyZ31idUaoiGWwz0fL95DdfOhJDr_sD1rODCozKS0DISbb8GnU_q95p-kZwL1kLbW6eVefIXcNcSZK2KKj-ByVQr3ON1RhYyvIvFc0VuXreAco3iczngN5_rQZTPFiXqzXJufzR1fN5UhxU5yPGgLvXU_eWg2bhFY4bKVLkJzi1uYVn8QKropwEoBO8Iw8TamJPQEuYWk22wwA8gd0A14KNUVmCa9JirAoawwQwhqTuxSa2MfgAIYIXh3CBARis_IkL58zO02rHXR78G7DRfZjrV_ltJCEdB6cIFE9xwenaKjns6YP_21QQ0OyhjG4fdwobqWz3AT22VyZLrupvzdvVeW7eAhf6MQRXli5WGApYVgyFoniAn_gnXr9e8voXZ9oK8RbBPkFBzf1PgyR8jk1U-RiP4bU1V1AFfJDNR5A97CayEs-z0NMxyzmF17I_H_M-dotAQVDT1z_icMA50HoOrpB_M2YkmJQ0mHe_dSxJSxr5YAUioKtJHBw2vMT8fO9Y",
          "Content-Type": "application/json",
      },
      body: `{"walletId":"24466965-893d-43bf-9cc4-e3ad29bddb61","contractAddress":"0x0a5d567cfa504437A7fe1C859754513aD2dDfa96","operations":[{"argumentsValues":["${address}"],"messageValue":0,"functionSignature":"mintToken(address)"}]}`,
    };

    const response = await fetch(
      "https://protocol-sandbox.lumx.io/v2/transactions/custom",
      options
    );
    const res = await response.json();
    console.log("onMintToken", res);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


/* export async function onSetEligibility(address: string, ethereum: any) {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const pulse = Pulse__factory.connect(contractAddress, signer);
    const gasLimit = await calculateGasLimit(pulse, "setEligibility", [
      address,
    ]);
    console.log(gasLimit);
    const response = await pulse.setEligibility(address, true, { gasLimit });
    console.log(response);
    const tx = await response.wait();
    console.log(tx);
    return tx;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function onCompleteActivity(address: string, ethereum: any) {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const pulse = Pulse__factory.connect(contractAddress, signer);
    const gasLimit = await calculateGasLimit(pulse, "completeActivity", [
      address,
    ]);
    console.log(gasLimit);
    const response = await pulse.completeActivity(address, true, { gasLimit });
    console.log(response);
    const tx = await response.wait();
    console.log(tx);
    return tx;
  } catch (error) {
    console.log(error);
    throw error;
  }
} */
