import { resend } from "@/lib/resend";
//using the resend library. check docs
// also using the react email component to integrate. check docs

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmails(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try{
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'MysteryMessage Verification Mail',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return {
            sucess:true, message: 'verification email sent successfully!'
        }
    }catch(emailError) {
        console.error("Error sending verification emails", emailError)
        return {
            sucess:false, message: 'Failed to send verification email'
        }
    }
}