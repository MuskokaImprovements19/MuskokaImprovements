import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const validate = async () => {
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`;
        const res = await fetch(url, {
          headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        });
        const data = await res.json();
        if (!res.ok) setStatus("invalid");
        else if (data.valid === false && data.reason === "already_unsubscribed") setStatus("already");
        else if (data.valid) setStatus("valid");
        else setStatus("invalid");
      } catch {
        setStatus("invalid");
      }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    try {
      const { error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <section className="section-padding py-32 max-w-xl mx-auto text-center">
        {status === "loading" && <p className="text-muted-foreground">Verifying...</p>}
        {status === "valid" && (
          <>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Unsubscribe</h1>
            <p className="text-muted-foreground mb-8">Click below to unsubscribe from future emails.</p>
            <button onClick={handleUnsubscribe} className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wide">
              Confirm Unsubscribe
            </button>
          </>
        )}
        {status === "already" && (
          <>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Already Unsubscribed</h1>
            <p className="text-muted-foreground">You've already been unsubscribed from our emails.</p>
          </>
        )}
        {status === "success" && (
          <>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Unsubscribed</h1>
            <p className="text-muted-foreground">You've been successfully unsubscribed. You won't receive further emails.</p>
          </>
        )}
        {status === "invalid" && (
          <>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Invalid Link</h1>
            <p className="text-muted-foreground">This unsubscribe link is invalid or has expired.</p>
          </>
        )}
        {status === "error" && (
          <>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Something Went Wrong</h1>
            <p className="text-muted-foreground">Please try again or contact us directly.</p>
          </>
        )}
      </section>
    </Layout>
  );
};

export default Unsubscribe;