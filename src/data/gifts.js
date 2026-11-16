// Gift list, in the same order as the invitation.
// - id:    key of the title and note in src/locales/pt-BR/translation.json (gifts.items.<id>)
// - image: file name in public/images/gifts
// - price: value in reais (BRL)
export const gifts = [
  { id: 'lightsabers', image: 'lightsabers.webp', price: 1500, qrCode: 'lightsabers.jpg', pixCode: '00020126500014br.gov.bcb.pix0111090501004300213Sabres_de_luz52040000530398654071500.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525OwGp3xCfXOPncwufrbBuXWZl363045BE8' },
  { id: 'fourthCat', image: 'fourth-cat.webp', price: 320, qrCode: 'fourth-cat.jpg', pixCode: '00020126730014br.gov.bcb.pix0111090501004300236Reserva_para_aquisicao_de_um_4o_gato5204000053039865406320.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525Q1IYvCBcnSCntewBmu91HCo9q6304EB8E' },
  { id: 'maracanaTicket', image: 'maracana-ticket.webp', price: 220, qrCode: 'maracana-ticket.jpg', pixCode: '00020126580014br.gov.bcb.pix0111090501004300221Ingresso_pro_maracana5204000053039865406220.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525FpveEecFd1srpl17djGfwsAzG6304B40F' },

  { id: 'forroClass', image: 'forro-class.webp', price: 180, qrCode: 'forro-class.jpg', pixCode: '00020126500014br.gov.bcb.pix0111090501004300213Aula_de_forro5204000053039865406180.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525ySQ9m0Dbb2SjbzinsURkWcZkQ63042C4A' },
  { id: 'brideMassage', image: 'bride-massage.webp', price: 180, qrCode: 'bride-massage.jpg', pixCode: '00020126550014br.gov.bcb.pix0111090501004300218Massagem_pra_noiva5204000053039865406180.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA622905259GEuSCld62YUXjAfumYlpwB1g6304017E' },
  { id: 'groomPhoto', image: 'groom-photo.webp', price: 120, qrCode: 'groom-photo.jpg', pixCode: '00020126630014br.gov.bcb.pix0111090501004300226Obrigar_noivo_a_tirar_foto5204000053039865406120.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525SsSnEeuMZkfyu74ZVPLze4nSG63040E33' },

  { id: 'vetVisit', image: 'vet-visit.webp', price: 270, qrCode: 'vet-visit.jpg', pixCode: '00020126520014br.gov.bcb.pix0111090501004300215Consulta_no_vet5204000053039865406270.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525SuTRLjYjNIfJcVNjfHeuetrAd6304D362' },
  { id: 'fluminenseJersey', image: 'fluminense-jersey.webp', price: 380, qrCode: 'fluminense-jersey.jpg', pixCode: '00020126580014br.gov.bcb.pix0111090501004300221Camisa_nova_do_fluzao5204000053039865406380.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525HipuTlC6woes158QQ36vZhTQ663048E44' },
  { id: 'bouquet', image: 'bouquet.webp', price: 170, qrCode: 'bouquet.jpg', pixCode: '00020126630014br.gov.bcb.pix0111090501004300226Jogar_buque_na_sua_direcao5204000053039865406170.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525z3Pcr8TDVqclH30UNAtpRJvLe6304D0B8' },

  { id: 'gameDayProjector', image: 'game-day-projector.webp', price: 200, qrCode: 'game-day-projector.jpg', pixCode: '00020126450014br.gov.bcb.pix0111090501004300208Projetor5204000053039865406200.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525Pa2U2c2zEoSrS91axUIv1kJIo6304DFE9' },
  { id: 'sickleAndHammer', image: 'sickle-and-hammer.webp', price: 70, qrCode: 'sickle-and-hammer.jpg', pixCode: '00020126560014br.gov.bcb.pix0111090501004300219Kit_foice_e_martelo520400005303986540570.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525aaEffztB3BoZ44etmKcGaP2Mr6304CAD8' },
  { id: 'djRequest', image: 'dj-request.webp', price: 50, qrCode: 'dj-request.jpg', pixCode: '00020126560014br.gov.bcb.pix0111090501004300219Pedir_musica_pro_DJ520400005303986540550.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525BL5vG6UDiBWTnC3G654iuWJbl6304DD6F' },

  { id: 'catShelves', image: 'cat-shelves.webp', price: 450, qrCode: 'cat-shelves.jpg', pixCode: '00020126560014br.gov.bcb.pix0111090501004300219Gatificacao_da_casa5204000053039865406450.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525o8eDKMRbFKsMdIbTUGfZN9rhz63047403' },
  { id: 'playstationController', image: 'playstation-controller.webp', price: 480, qrCode: 'playstation-controller.jpg', pixCode: '00020126660014br.gov.bcb.pix0111090501004300229Controle_extra_de_playstation5204000053039865406480.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525RXgZ2AxUvPOC93CztzzrtJpjF63045832' },
  { id: 'ghostMeter', image: 'ghost-meter.webp', price: 66.6, qrCode: 'ghost-meter.jpg', pixCode: '00020126680014br.gov.bcb.pix0111090501004300231Medidor_de_atividade_paranormal520400005303986540566.605802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525pvgVnOEMRu4BR2SvtliAhcq1d630425A4' },

  { id: 'energyDrink', image: 'energy-drink.webp', price: 30, qrCode: 'energy-drink.jpg', pixCode: '00020126570014br.gov.bcb.pix0111090501004300220Energetico_pra_noiva520400005303986540530.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525IP7qLVdt035Y09TdzUZaWiW3g6304C914' },
  { id: 'brokeGuest', image: 'broke-guest.webp', price: 1, qrCode: 'broke-guest.jpg', pixCode: '00020126460014br.gov.bcb.pix0111090501004300209Sou_pobre52040000530398654041.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA622905256WEX02wWkUxFYuFBh8MD6jA0H6304C3E4' },
  { id: 'thankYouFriend', image: 'thank-you-friend.webp', price: 1000, qrCode: 'thank-you-friend.jpg', pixCode: '00020126520014br.gov.bcb.pix0111090501004300215Gratidao_eterna52040000530398654071000.005802BR5924ALICIA_BEZERRA_MAGALHAES6011JOAO_PESSOA62290525z3MK0d2aHXeIzPQKcsuw0iGdx63046DA0' },
]
