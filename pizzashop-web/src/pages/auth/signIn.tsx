import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

//validação dos campos do formulario com zod + tipagem
const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  function handleSigIn(data: SignInForm) {
    console.log({ data });

    toast.success("Enviamos um link de autenticação para seu email!");
  }

  return (
    <>
      <Helmet titleTemplate="Login" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="ghost">
          <Link to={"/signup"}>Novo estabelecimento</Link>
        </Button>
        <div className="w-[320px] flex flex-col justify-center gap 6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acompanhar suas vendas
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel parceiro
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSigIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu email</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
