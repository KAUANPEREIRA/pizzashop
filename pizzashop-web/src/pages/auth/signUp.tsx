import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

//validação dos campos do formulario com zod + tipagem
const signUpForm = z.object({
  restaurantName: z.string(),
  email: z.string().email(),
  managerName: z.string(),
  phone: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  const navigate = useNavigate();

  function handleSignUp(data: SignUpForm) {
    console.log({ data });

    toast.success("Restaurante cadastrado com sucesso!", {
      action: {
        label: "login",
        onClick: () => navigate("/signin"),
      },
    });
  }

  return (
    <>
      <Helmet titleTemplate="Cadastro" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="ghost">
          <Link to={"/signin"}>Fazer login</Link>
        </Button>
        <div className="w-[320px] flex flex-col justify-center gap 6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e começe suas vendas
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu email</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar voçê com concorda com nossos{" "}
              <a href="#" className="underline underline-offset-4">
                termos de servicos
              </a>{" "}
              e{" "}
              <a href="#" className="underline underline-offset-4">
                politicas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
